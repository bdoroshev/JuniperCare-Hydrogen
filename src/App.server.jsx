import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
	Route,
  FileRoutes,
  ShopifyProvider,
	CartProvider
} from '@shopify/hydrogen';
import {OkendoProvider} from '@okendo/shopify-hydrogen';
import {Suspense} from 'react';
import NotFound from './components/NotFound.server';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
				<OkendoProvider
						subscriberId={import.meta.env.VITE_OKENDO_SUBSCRIBER_ID}
				/>
				<CartProvider>
					<Router>
						<FileRoutes />
						<Route path="*" page={<NotFound />} />
					</Router>
				</CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);