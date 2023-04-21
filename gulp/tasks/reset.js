import {deleteAsync} from "del";

export const reset = () => {
  return deleteAsync(('app/'), {
    forse: true
  })
}


export const resetBuild = () => {
  return deleteAsync(('production/'), {
    forse: true
  })
}