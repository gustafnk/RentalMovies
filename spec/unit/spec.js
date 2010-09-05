
describe 'YourLib'
  
  describe '.someMethod()'
    it 'should do something'
      $("#shell").html($(fixture('Movielist.html')))
      result = fixture('Butikslager_available.html')

      
      MovieInfoRepository = function(){
        this.getByNr = function() {
          return result
        }
      }

      var x = new TooBigClass();
      x.hideAllIfNotInStore();

      true.should.be true
    end
  end
end
