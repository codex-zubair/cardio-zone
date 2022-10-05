export const sumTime = (times)=>
{
   return times.reduce((previous, current) => {
       return previous + current;
    }, 0)
} 