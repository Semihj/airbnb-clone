export type HouseProps = {
    id:number,
    hosted_by:string,
    country:string,
    city:string,
    lat:number,
    lang:number,
    price:number,
    title:string,
    utilities:Array<string>,
    images:Array<string>
}

export type calendarProps = {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string | undefined;
  };
  
export  type reduxProps = {
    likes:{
      liked_houses:[]
    }
  
}