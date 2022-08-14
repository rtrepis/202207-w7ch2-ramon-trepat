interface Robot {
  id: string;
  name: string;
  img: string;
  specs: {
    speed: number;
    stamina: number;
    createDate: string;
  };
}

export default Robot;
