import axios from 'axios';

import { SERVER_URL } from 'src/constants';

import { ResultImagePathType } from 'src/types';

const postPresignedUrl = async () => {
  const { id, presignedUrl } = (await axios.post(SERVER_URL + '/api/memberImages/presigned_url'))
    .data;

  return { id, presignedUrl };
};

const putImageToS3 = async (presignedUrl: string, newFile: File) => {
  const { status } = await axios.put(presignedUrl, newFile);
  return status;
};

const getUserImagePath = async (id: number) => {
  const { imageUrl } = (await axios(SERVER_URL + '/api/memberImages', { params: id })).data;
  return imageUrl;
};

const getInferenceStatus = async (id: number) => {
  const { status } = await axios(SERVER_URL + '/api/memberImages/inference_check', {
    params: { id },
  });
  return status;
};

const postStartInference = async (id: number) => {
  await axios.post(SERVER_URL + `/api/memberImages/upload_complete?id=${id}`);
};

const getResultImagePath = async (id: number) => {
  const result = (
    await axios.get<ResultImagePathType[]>(SERVER_URL + `/api/memberImages/result?id=${id}`)
  ).data;
  return result.map((r) => r.imageUrl);
};

export {
  postPresignedUrl,
  putImageToS3,
  getUserImagePath,
  getInferenceStatus,
  postStartInference,
  getResultImagePath,
};
