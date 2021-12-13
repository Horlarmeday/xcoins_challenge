import Joi from 'joi';

export function validateProfile(profile) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    nickname: Joi.string().required(),
    name: Joi.string().required(),
  });
  return schema.validate(profile);
}
