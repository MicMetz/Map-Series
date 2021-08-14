import {getFrame as getRandomMapFrame} from "api/arcGIS";
import {ArcMap} from "models/ArcMap";
import {atom, selector, useRecoilValue, useSetRecoilState} from "recoil";



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



