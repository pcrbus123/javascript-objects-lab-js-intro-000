var recipes = new Object ();
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
}
function  destructivelyUpdateObjectWithKeyAndValue(object, key,value){
  object[key]=value;
  return object
}
function deleteFromObjectByKey(object, key){
  var object = {key};
  var newObj =Object.assign({}, object)
  return newObj;
  delete newObj.key;
  return newObj;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key){
  var object = new Object({key});
  delete object.key;
  object;
  return object
}
