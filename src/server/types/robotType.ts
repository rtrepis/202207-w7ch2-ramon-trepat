interface Robot {
  id: number;
  name: string;
  img: string;
  specs: {
    speed: number;
    stamina: number;
    createDate: string;
  };
}

export default Robot;
