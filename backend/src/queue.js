import kue from 'kue';
import http from 'http';

const queue = kue.createQueue();

queue.process('website', (job, done) => {
  return done()
})

const job = queue.create('website', {
  entry: 'hackarizona.org'
})
  .attempts(2)
  .save((err) => {
    if (!err) { console.log(`started job: ${job.id}`); }
  })

job
  .on('complete', (res) => {
    console.log('Job completed', res)
  })
  .on('failed attempt', (errorMessage, attempts) => {
    console.log('Attempt failed', attempts)
  })
  .on('failed', (errMsg) => {
    console.log('Job Failed', errMsg)
  })
  .on('progress', (progress, data) => {
    console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
  });
  