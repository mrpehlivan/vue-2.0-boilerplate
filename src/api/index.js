// imports resources
import {testResources} from './resources'

// exports
export default {
  //api methods will write to here
  postData: function (data) {
    return testResources.save(data);
  },
  getData: function () {
    return testResources.get();
  }
}

/***
 Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

 ***/
