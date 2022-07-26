import { bool } from "aws-sdk/clients/signer";

export const validator = async ({
  name,
  input,
  required,
  type,
  min,
  max,
  isExist,
  isNotExist,
}: {
  name: string,
  input: any,
  required?: bool,
  type?: 'string' | 'number',
  min?: number,
  max?: number,
  isExist?: () => any,
  isNotExist?: () => any,
}) => {

  if (!input) {
    if (required) { return `The ${name} parameter is required`; }
    else { return ''; }
  }

  if (typeof input !== 'string') {
    return `The ${name} parameter mast be of type string`;
  }
  if (min && min > input.length) {
    return `The number of characters of ${name} mast be grater than ${min}`;
  }
  if (max && input.length > max) {
    return `The number of characters of ${name} mast be less than ${max}`;
  }

  // TODO validate numbers

  if (isExist) {
    const data = await isExist();
    if (data?.length) {
      console.log(data);

      return `This ${name} is allergy Exist`;
    }
  }

  if (isNotExist) {
    const data = await isNotExist();
    if (data == false) {
      console.log(data == false);

      return `This ${name} is not Exist`;
    }
  }

  return '';
};

export default validator;
