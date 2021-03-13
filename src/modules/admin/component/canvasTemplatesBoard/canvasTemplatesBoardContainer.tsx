import React, { useState, useEffect } from "react";
import { message } from "antd";

import CanvasTemplatesBoard from "./canvasTemplatesBoard";
import adminRepository from "../../../../initialize/repositories/adminRepository";
import localStorageApi from "../../../../initialize/api/localStorageApi";
import adminStatesStorage from "../../../../initialize/statesStorages/adminStatesStorage";
import { ICanvasTemplate } from "../../interfaces";
import { LS } from "../../../../utils/helpers";
import { IServerResponse } from "../../../common/interfaces/interfaces";

const CanvasTemplatesBoardContainer = () => {
  const [canvasTemplateList, setCanvasTemplateList] = useState([]);

  adminStatesStorage.registState<Array<ICanvasTemplate> | []>("canvasTemplateList", {
    state: canvasTemplateList,
    setState: setCanvasTemplateList
  });

  useEffect(() => {
    const loading = message.loading(LS("Loading"), 1000);
    const access_token: string = localStorageApi.getLocalData("userAuthData", {}).access_token;
    adminRepository.getCanvasTemplateList(access_token)
      .then((response: IServerResponse) => {
        if (response.code !== 0) {
          message.error(`Error code - ${response.code}`);
          return;
        };

        adminStatesStorage.setState("canvasTemplateList", response.message.data);
      })
      .catch((e: string) => message.error(LS(e.toString())))
      .finally(() => loading());
  }, []);

  return <CanvasTemplatesBoard data={canvasTemplateList} setCanvasTemplateList={setCanvasTemplateList} />
}

export default CanvasTemplatesBoardContainer;