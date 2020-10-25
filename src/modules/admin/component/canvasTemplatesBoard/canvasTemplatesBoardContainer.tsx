import React, { useState, useEffect } from "react";
import { message } from "antd";

import CanvasTemplatesBoard from "./canvasTemplatesBoard";
import adminRepository from "../../../../initialize/repositories/adminRepository";
import localStorageApi from "../../../../initialize/api/localStorageApi";
import adminStatesStorage from "../../../../initialize/statesStorages/adminStatesStorage";
import { ICanvasTemplate } from "../../interfaces";
import { LS } from "../../../../utils/helpers";

const CanvasTemplatesBoardContainer = () => {
  const [canvasTemplateList, setCanvasTemplateList] = useState([]);

  adminStatesStorage.registState<Array<ICanvasTemplate> | []>("canvasTemplateList", {
    state: canvasTemplateList,
    setState: setCanvasTemplateList
  });

  useEffect(() => {
    const loading = message.loading(LS("Loading"), 1000);
    const ownerId: string = localStorageApi.getLocalData("userAuthData", {}).id;
    adminRepository.getCanvasTemplateList(ownerId)
      .then((item) => {
        if (item.error) {
          message.error(LS(item.error));
          return;
        };

        adminStatesStorage.setState("canvasTemplateList", item);
      })
      .catch((e: string) => message.error(LS(e.toString())))
      .finally(() => loading());
  }, []);

  return <CanvasTemplatesBoard data={canvasTemplateList} setCanvasTemplateList={setCanvasTemplateList} />
}

export default CanvasTemplatesBoardContainer;