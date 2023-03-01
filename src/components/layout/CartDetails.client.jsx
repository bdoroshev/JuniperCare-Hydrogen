import {
  useCart,
  useCartLine,
  CartLineProvider,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  Image,
  Link,
  Money,
} from "@shopify/hydrogen";

export function CartDetails({ onClose }) {
  const { lines } = useCart();

  if (lines.length === 0) {
    return <CartEmpty onClose={onClose} />;
  }

  return (
    <form className="container grid grid-cols-1 grid-rows-[1fr_auto] h-100vh lg:h-[65vh]">
      <section
        aria-labelledby="cart-contents"
        className="overflow-auto transition"
      >
        <ul className="overflow-y-scroll h-full max-h-[25vh] lg:max-h-full">
          {lines.map((line) => {
            return (
              <CartLineProvider key={line.id} line={line}>
                <CartLineItem onClose={onClose} />
              </CartLineProvider>
            );
          })}
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        className="border-t pt-10"
      >
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>
        <OrderSummary />
      </section>
    </form>
  );
}

export function CartEmpty({ onClose }) {
  return (
    <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-[60vh]">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-4xl">
        Your cart is empty
      </h2>
      <button onClick={onClose} className="button">
        Continue shopping
      </button>
    </div>
  );
}

function CartCheckoutActions() {
  const { checkoutUrl } = useCart();
  return (
    <Link to={checkoutUrl} width="full" className="button mt-5">
      CHECKOUT
    </Link>
  );
}

function OrderSummary() {
  const { cost } = useCart();
  return (
    <>
      <div className="md:flex items-center justify-between">
        <div className="border p-5 mb-5 md:mb-0">
          <h3 className="uppercase">
            FREE STANDARD DELIVERY <br className="block md:hidden" />{" "}
            <span className="text-xs">(3-5 Business Days)</span>
          </h3>
          <p className="text-sm mt-3 text-gray">
            Enjoy free standard delivery on orders over 25$
          </p>
        </div>
        <div>
          <h3 className="flex font-bold text-sm uppercase gap-8">
            Subtotal: <Money withoutTrailingZeros data={cost?.subtotalAmount} />
          </h3>
          <CartCheckoutActions />
        </div>
      </div>
    </>
  );
}

export function CartLineItem({ onClose }) {
  const { linesRemove } = useCart();
  const { id: lineId, quantity, merchandise } = useCartLine();

  return (
    <li
      key={lineId}
      className="grid lg:grid-cols-5 items-center md:justify-center w-full py-3 border-b border-gray"
    >
			<div className="grid grid-cols-[75px_1fr] gap-10 col-span-3 lg:col-span-2 items-center">
				<Image
					data={merchandise.image}
					className="max-h-[80px] !w-full object-cover"
					style={{width: "initial"}}
				/>
				<div>
					<h3 className="font-bold text-lg">
						<Link to={`/products/${merchandise.product.handle}`} onClick={onClose}>
							{merchandise.product.title}
						</Link>
					</h3>
					{(merchandise?.selectedOptions || []).map((option) => {
						if (option.value !== "Default Title") {
							return(
								<span key={option.name} className="flex justify-start gap-20 mt-2 text-sm">
									{option.name}: {option.value}
								</span>
							)
						}
					})}
				</div>
			</div>
      <div className="flex items-center lg:justify-end gap-2">
        <div className="flex text-copy">
          <CartLineQuantityAdjust
            lineId={lineId}
            quantity={quantity}
            linesRemove={linesRemove}
          />
        </div>
      </div>
      <CartLinePrice as="span" className="text-right" />
      <button
        type="button"
        className="lg:text-right"
        onClick={() => linesRemove(lineId)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 h-5 ml-auto"
        >
          <title>Close</title>
          <line
            x1="4.44194"
            y1="4.30806"
            x2="15.7556"
            y2="15.6218"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <line
            y1="-0.625"
            x2="16"
            y2="-0.625"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
      </button>
    </li>
  );
}

function CartLineQuantityAdjust({ lineId, quantity }) {
  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <div className="flex items-center text-2xl gap-3">
        <CartLineQuantityAdjustButton
          adjust="decrease"
          aria-label="Decrease quantity"
          className="h-[40px] flex justify-center items-center py-[0.125rem] transition text-gray hover:text-textColor disabled:pointer-events-all disabled:cursor-wait"
        >
          &#8722;
        </CartLineQuantityAdjustButton>
        <CartLineQuantity
          as="div"
          className="h-[40px] flex justify-center items-center text-center py-[0.125rem] px-2 text-primary/90"
        />
        <CartLineQuantityAdjustButton
          adjust="increase"
          aria-label="Increase quantity"
          className="h-[40px] flex justify-center items-center py-[0.125rem] transition text-gray hover:textColor disabled:pointer-events-all disabled:cursor-wait"
        >
          &#43;
        </CartLineQuantityAdjustButton>
      </div>
    </>
  );
}
