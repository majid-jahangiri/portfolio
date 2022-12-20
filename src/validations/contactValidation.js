import * as Yup from 'yup'

export const contactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required('نام و نام خانوادگی الزامیست'),
  email: Yup.string().email('آدرس ایمیل وارد شده معتبر نمیباشد').required('آدرس ایمیل الزامیست'),
  subject: Yup.string().required('نوشتن عنوان الزامیست'),
  message: Yup.string().required('نوشتن پیام الزامیست'),
})
