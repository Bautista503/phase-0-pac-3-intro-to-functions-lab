describe('shout(string)', function() {
    it('receives one argument and returns it in all caps', function() {
      expect(shout('hello')).toEqual('HELLO');
    })
  })
function shout(string) {
    return string.toUpperCase()
}
describe('whisper(string)', function() {
    it('receives one argument and returns it in all lowercase', function() {
      expect(whisper('HELLO')).toEqual('hello');
    })
  })
function whisper(string) {
    return string.toLowerCase()
}
describe('sayHiToGrandma(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase')
    expect(sayHiToGrandma('lowercase')).toEqual('I can\'t hear you!');
    
})
var uppercase, lowercase
function logShout(string){
    uppercase = string.toUpperCase()
    string = uppercase;
    console.log(uppercase);
  }
  function logWhisper(string){
    lowercase = string.toLowerCase()
    string = uppercase;
    console.log(lowercase);
  }
function sayHiToGrandma(string) {
    if (string.toLowerCase() === string){
        return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
    }
}