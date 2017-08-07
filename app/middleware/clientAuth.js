// module.exports = () => {
//   return function*(next) {
//     if (!this.session.clientLogin) {
//       this.redirect("/client/login");
//       yield Promise.reject(); //Promise.redirect("/client/login");
//       return;
//     }
//     yield next;
//   }
// };