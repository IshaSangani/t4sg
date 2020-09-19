class User {
    constructor(x) {
      this.userId = x;
    }
    get uId() {
      return this.userId; 
    }
    set uId(x){
      this.userId = x; 
    }
  }
  export default User; 