import Joi from 'joi';

export function validateSimulator(simulator) {
  const schema = Joi.object({
    price: Joi.string().required(),
    cryptocurrency: Joi.string().required(),
    dateRecorded: Joi.date().required(),
    euros: Joi.number().required(),
    quantity: Joi.number().required(),
  });
  return schema.validate(simulator);
}
