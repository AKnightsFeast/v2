using System;
using System.Threading.Tasks;
using System.Collections.Generic;

using AKF.Common.Models;

namespace AKF.Database.Interfaces
{
    public interface IDatabaseContext: IDisposable
    {
        public Task AddAssessment(Assessment assessment);
        public Task<Assessment> GetAssessment(long id);
        public Task<List<Assessment>> GetAssessments();
        public Task<List<Assessment>> GetAssessments(int page, int pageSize);
    }
}
