
describe 'RentalMovies'
 
  after_each
    $("#shell").html('')
  end

  describe '.hideAllIfNotInStore()'
    it 'should remove half of the movies for stubbed response'
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
      $("tr.row:").length.should.be 26
    end
  end
end
