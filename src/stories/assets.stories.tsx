/** @description Stories of ui components from assets folder. */
import React from "react";

import "./style.scss";
import "../index.scss";

import Splash from "../assets/ui/splash/splash";
import PlusButton from "../assets/ui/plusButton/plusButton";
import ComponentLoading from "../assets/ui/componentLoading/componentLoading";

/**
 * @description Splash component.
 * @module Splash.
*/
export const WithSplash = () => <Splash />;

/**
 * @description Button with plus symbol on the left side and text on the right one.
*/
export const WithPlusButton = () => {
  return (
    <div className="plus-button_stories">
      <PlusButton
        text="Plus Button"
        handleClick={() => { }}
      />
    </div>
  );
};

/**
 * @description Loading icon while component in render process.
*/
export const WithComponentLoading = () => <ComponentLoading />;

export default { title: "Assets" };