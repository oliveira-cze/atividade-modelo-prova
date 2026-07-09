export const UserService = {

  async getUserQuantity(quantity: number) {
    const res = await fetch(
      `https://randomuser.me/api/?results=${quantity}&seed=preparacao-next`
    );
    return res.json();
  },

  async getUserById (index : number) {
    const res = await fetch(
      `https://randomuser.me/api/?results=${index+1}&seed=preparacao-next`
    );
    const data = await res.json();
    const user = data.results[index]

    return {...user, id : index}
  }
};
