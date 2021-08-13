import {getFrame as getRandomMapFrame} from "api/arcGIS";
import {ArcMap} from "models/ArcMap";
import {atom, selector, useRecoilValue, useSetRecoilState} from "recoil";
// import WebMap from "esri/WebMap";
// import MapView from "esri/views/MapView";
// import Search from "esri/widgets/Search";



const currentFrameQuery = selector<ArcMap>({
	key: "currentFrameQuery",
	get: async () => {
		const mapFrame = await getRandomMapFrame();
		return mapFrame;
	},
});

export const currentFrameState = atom<ArcMap>({
	key    : "currentFrameAtom",
	default: currentFrameQuery,
});

export const useRefreshCurrentFrame = () => {
	const setFrame = useSetRecoilState(currentFrameState);

	return async () => {
		setFrame(await getRandomMapFrame());
	};
};



