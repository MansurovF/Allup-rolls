
using Microsoft.EntityFrameworkCore;

namespace Mentorpractice.DataAccessLayer
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
    }
        Declare public DbSet<   > { get; set; }
    }
}
