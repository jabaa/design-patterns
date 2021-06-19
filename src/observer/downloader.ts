import http from 'http';
import { firstValueFrom, Observable, Observer } from 'rxjs';

const observable = new Observable<string>(subscriber => {
  const req = http.request('http://www.google.com', (res) => {
    let data = '';
    res.on('data', (chunk: any) => {
      data += chunk;
    });
    res.on('end', () => {
      subscriber.next(data);
      subscriber.complete();
    });
  });

  req.on('error', (error) => subscriber.error(error));
  req.end();
});

const observer: Observer<string> = {
  next(data: string) {
    console.log(data);
  },
  error(err: string) {
    console.log(err);
  },
  complete() {
    console.log('Complete');
  }
};

// observable.subscribe(observer);
(async () => {
  const response = await firstValueFrom(observable);
  console.log(response);
})();
