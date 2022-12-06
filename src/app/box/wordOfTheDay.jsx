export default async (settings, dispatch) => {
   let date = new Date().toISOString().split('T')[0];

   if (new Date(settings.wordAtOpening.wordOfTheDay.date) < new Date(date)) dispatch({
      type: 'settings wordAtOpening wordOfTheDay'
   });
};
