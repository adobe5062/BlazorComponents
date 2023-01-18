using System.ComponentModel.DataAnnotations;

namespace BlazorComponents.Models
{
    public class SampleForm
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public HashSet<string> MultiSelectItems { get; set; } = new HashSet<string>();
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
    }
}
