import commonStatesStorage from "../initialize/statesStorages/commonStatesStorage";

import { similarityWordSearchWithHighlighting, LS } from "../utils/helpers";

describe("Tests: helpers", () => {
	it("Test: SimilarityWordSearchWithHighlighting function for searching by name and highlighting", () => {
		const str: string = "Gorlaks",
			search: string = "orl";
		const necessaryResult: Array<string> = ["G", "orl", "aks"];
		const result: Array<string> = similarityWordSearchWithHighlighting(str, search);

		expect(result).toEqual(necessaryResult);
	})

	it("Test: LS function for translate", () => {
		commonStatesStorage.registState<string>("language", {
			state: "ru",
			setState: () => {}
		});

		const fakeWord = "Loading",
				expectedResult = "...Загрузка";
		expect(LS(fakeWord)).toBe(expectedResult);
	})
})