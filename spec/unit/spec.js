
describe 'RentalMovies'
 
  after_each
    $("#shell").html('')
  end

  describe '.hideAllIfNotInStore()'
    it 'should do something'
      $("#shell").html($(fixture('Movielist.html')))
      console.log(
        "Original number of rows: " + $("tr.row").length)
      positiveResult = fixture('Butikslager_available.html')
      negativeResult = fixture('Butikslager_unavailable.html')

      var hasMovie = true;
      MovieInfoRepository = function(){  
        this.getByNr = function() {
          hasMovie = !hasMovie;
          return hasMovie ? positiveResult : negativeResult 
        }
      }

      var x = new TooBigClass()
      x.hideAllIfNotInStore()

      console.log(
         "Number of available rows: " + $("tr.row").length)
    end
  end
end
