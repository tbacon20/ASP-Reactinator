using Microsoft.AspNetCore.Mvc;
using React_Backend.Models;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace React_Backend.Controllers
{
    [ApiController]
    [Route("/api/movie")]
    public class MovieController : Controller
    {

        private JoelHiltonMovieCollectionContext _context;
        public MovieController(JoelHiltonMovieCollectionContext context)
        {
            _context = context;
        }
        public string GetMovies()// WAS IEnumerable<Movie> GetMovies()
        {
            // Not returning a view here because it's looking for an iEnumerable
            var context = new
            {
                movies = _context.Movies.ToArray()
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title),
            };

            string jsonContext = JsonSerializer.Serialize(context);
            return jsonContext;
            // WAS return _context.Movies.ToArray();
        }

        /*
        public IEnumerable<Category> GetCategories()
        {
            return _context.Categories.ToArray();
        }
        */
 
    }
}
