import {isImmediate} from './immediate';

function mustShowError(meta: {[k: string]: any;}): boolean {
  const submitError = !meta.dirtySinceLastSubmit && meta.submitError;

  if (!submitError && !meta.error) {
    return false;
  }

  return meta.touched || isImmediate(meta.error);
}

export default mustShowError;
