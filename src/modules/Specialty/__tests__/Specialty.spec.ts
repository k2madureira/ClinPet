import request from 'supertest';
import app from '@shared/app';

describe('Specialty', () => {
  it('Should be able create  a new specialty', async () => {
    const specialty = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' });
    await request(app).delete(`/specialty/${specialty.body.id}`);

    expect(specialty.body).toHaveProperty('id');
  });

  it('Should not be able to create a new specialty, with empty description', async () => {
    const specialty = await request(app)
      .post('/specialty')
      .send({ description: '' });

    expect(specialty.body).toHaveProperty('error');
  });

  it('Should not be able to create a duplicate specialty', async () => {
    const specialty_1 = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' });

    const specialty_2 = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' });

    await request(app).delete(`/specialty/${specialty_1.body.id}`);

    expect(specialty_2.body).toHaveProperty('error');
  });

  it('Should not be able to list specialtys', async () => {
    const specialty = await request(app).get('/specialty');

    expect(specialty.body).toHaveProperty('specialtys');
  });
});
