using Microsoft.EntityFrameworkCore;
using Trying.Models;
namespace Trying.DataAccessLayer
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }


    }
}
