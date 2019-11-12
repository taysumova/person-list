export const authRules = {
  email: [
    value => !!value || "Обязательное поле",
    value =>
      (value || "").length <= 30 || "Макисмальное количество символов: 30",
    value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      return pattern.test(value) || "Некорректный e-mail";
    }
  ],
  password: [
    value => !!value || "Обязательное поле",
    value => (value || "").length > 6 || "Минимальное количество символов: 6"
  ]
};

export const personRules = {
  title: [value => !!value || "Обязательное поле"],
  phone: [
    value =>
      (value || "").length <= 12 || "Максимальное количество символов: 12",
    value => {
      const pattern = /^$|(\d+$)/;
      return pattern.test(value) || "Можно вводить только цифры";
    }
  ],
  email: [
    value =>
      (value || "").length <= 30 || "Максимальное количество символов: 30",
    value => {
      const pattern = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      return pattern.test(value) || "E-mail is invalid";
    }
  ],
  link: [
    value => {
      const pattern = /^$|^https?:\/\/\w+/i;
      return pattern.test(value) || "Некорректный url";
    }
  ],
  instagramLink: [
    value => {
      const pattern = /^$|^https?:\/\/(www\.)?(m\.)?instagram\.com\/\w+/i;
      return pattern.test(value) || "Некорректная ссылка на Instagram";
    }
  ],
  vkLink: [
    value => {
      const pattern = /^$|^https?:\/\/(www\.)?(m\.)?vk\.com\/\w+/i;
      return pattern.test(value) || "Некорректная ссылка на Vk";
    }
  ],
  facebookLink: [
    value => {
      const pattern = /^$|^https?:\/\/(www\.)?(m\.)?facebook\.com\/\w+/i;
      return pattern.test(value) || "Некорректная ссылка на Facebook";
    }
  ]
};
