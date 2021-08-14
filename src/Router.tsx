import {OptionsRouter} from "react-typesafe-routes";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import FramesPage from "./pages/FramesPage";
import GalleryPage from "./pages/GalleryPage";
import TestPage from "./pages/TestPage";

const routeOptions = {
	showAppBar: true,
	showDrawer: true,
};

const router = OptionsRouter(routeOptions, (route) => ({
	home     : route("", {
		component: HomePage,
	}),
	favorites: route("favorites", {
		component: FavoritesPage,
	}),
	frames   : route("frames", {
		component: FramesPage,
	}),
	gallery  : route("gallery", {
		component: GalleryPage,
	}),
	test  : route("test_page", {
		component: TestPage,
	}),
	fallback : route("*", {
		component: NotFoundPage,
		options  : {
			showAppBar: false,
			showDrawer: false,
		},
	}),
}));

export default router;
