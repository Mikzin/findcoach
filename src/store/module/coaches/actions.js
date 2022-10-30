export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://findcoach-3a683-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      //error...
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://findcoach-3a683-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const resoponseData = await response.json();

    if (!response.ok) {
      const error = new Error(resoponseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in resoponseData) {
      const coach = {
        firstName: resoponseData[key].firstName,
        lastName: resoponseData[key].lastName,
        description: resoponseData[key].description,
        hourlyRate: resoponseData[key].hourlyRate,
        areas: resoponseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
