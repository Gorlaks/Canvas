/**
 * @description Url path of server for apiClient.
*/
export const url: string = "https://canvas-back.herokuapp.com";

/**
 * @description Route paths for routing.
 * @readonly
 * @type {string}
*/
export enum RoutePath {
	AUTH_PATH 	= "/auth",
	USER_PATH 	= "/user",
	CANVAS_PATH = "/canvas",
	ADMIN_PATH 	= "/admin"
};

/**
 * @description All routes that can be in project.
*/
export const allExistingRoutes = Object.keys(RoutePath).map((item: string) => {
	return (RoutePath as any)[item];
});