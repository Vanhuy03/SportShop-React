import Joi from 'joi'

export const formSignupSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Tên không được để trống',
        'any.required': 'Trường tên là bắt buộc'
    }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Vui lòng nhập email'
        }),
    password: Joi.string().required().min(6).messages({
        'string.empty': 'Mật khẩu không được để trống',
        'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
        'any.require': 'Trường mật khẩu là bắt buộc'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'string.empty': 'Xác nhận mật khẩu không được để trống',
        'any.only': 'Xác nhận mật khẩu không khớp',
        'any.required': 'Trường xác nhận mật khẩu là bắt buộc'
    })
})
export const formSigninSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email không hợp lệ',
            'any.required': 'Vui lòng nhập email'
        }),
    password: Joi.string().required().min(6).messages({
        'string.empty': 'Mật khẩu không được để trống',
        'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
        'any.require': 'Trường mật khẩu là bắt buộc'
    })
})
export const formProductShema = Joi.object({
    name:Joi.string().required().min(3).messages({
        'string.empty': 'Tên không được để trống',
        'string.min': ' Tên phải có ít nhất {#limit} ký tự',
        'any.required': 'Trường tên là bắt buộc'
    }),
    price:Joi.number().required().min(0).messages({
        'string.empty': 'Giá không được để trống',
        'string.min': 'Giá phải có ít nhất {#limit} ký tự',
        'any.required': 'Trường giá là bắt buộc'
    }),
    image:Joi.string().required().min(6).messages({
        'string.empty': 'Ảnh không được để trống',
        'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
        'any.required': 'Trường Ảnh là bắt buộc'
    }),
    desc:Joi.string().required().min(3).messages({
        'string.empty': 'Mô tả không được để trống',
        'string.min': 'Mô tả phải có ít nhất {#limit} ký tự',
        'any.required': 'Trường mô tả là bắt buộc'
    }),


})