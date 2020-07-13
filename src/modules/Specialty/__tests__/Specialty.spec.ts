import request from 'supertest';
import app from '@shared/app';
import Specialty from '../models/Specialty';

let specialtyTruncate: Specialty;

describe('Specialty', () => {
  beforeEach(() => {
    specialtyTruncate = new Specialty();
  });

  it('Should be able create  a new specialty', async () => {
    const specialty = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' });
    await request(app).delete(`/specialty/${specialty.body.id}`);
    await specialtyTruncate.truncate();

    expect(specialty.body).toHaveProperty('id');
  });

  it('Should not be able to create a new specialty, with empty description', async () => {
    const specialty = await request(app)
      .post('/specialty')
      .send({ description: '' });
    await specialtyTruncate.truncate();
    expect(specialty.body).toHaveProperty('error');
  });

  it('Should be able to delete a specialty', async () => {
    const specialty_2 = await request(app).delete('/specialty/_SPECIALTYID_');
    expect(specialty_2.body).toHaveProperty('success');
  });

  it('Should not be able to create a duplicate specialty', async () => {
    const specialty_2 = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' })
      .send({ description: '_REPEAT_' });

    expect(specialty_2.body).toHaveProperty('error');
  });

  it('Should  be able to list specialtys', async () => {
    const specialtys = await request(app).get('/specialty');

    expect(specialtys.body).toHaveProperty('specialtys');
  });
});
