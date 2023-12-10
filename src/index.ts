import { getMimeType, getMimeExtension } from '@mn-test/sample-mime-lib';

export const useMimeType = (filename: string) => {
  return `Your mime type is ${getMimeType(filename)}`;
};

export const useMimeExtension = (mimeType: string) => {
  return `Your mime extension is ${getMimeExtension(mimeType)}`;
};
