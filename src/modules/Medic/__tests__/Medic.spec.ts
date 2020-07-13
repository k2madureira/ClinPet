import request from 'supertest';
import app from '@shared/app';

describe('Medic', () => {
  it('Should be able create  a new medic', async () => {
    const specialty = await request(app)
      .post('/specialty')
      .send({ description: '_DESCRIPTION_' });

    const medic = await request(app)
      .post('/medic')
      .send({ name: '_MEDIC_', specialty_id: specialty.body.id });

    const dm = await request(app).delete(`/medic/${medic.body.id}`);
    const ds = await request(app).delete(`/specialty/${specialty.body.id}`);

    // console.log(dm.body, ds.body);

    expect(medic.body).toHaveProperty('id');
    expect(dm.body).toHaveProperty('success');
    expect(ds.body).toHaveProperty('success');
  });

  it('Should not be able to create a new medic, with empty fields', async () => {
    const medic_1 = await request(app).post('/medic').send({ name: '' });
    const medic_2 = await request(app)
      .post('/medic')
      .send({ specialty_id: '' });

    expect(medic_1.body).toHaveProperty('error');
    expect(medic_2.body).toHaveProperty('error');
  });

  it('Should not be able to create a new medic, with wrong specialty_id', async () => {
    const medic = await request(app)
      .post('/medic')
      .send({ name: '_NAME_', specialty_id: '_WRONG_' });

    expect(medic.body).toHaveProperty('error');
  });

  it('Should be able to list medics', async () => {
    const medic = await request(app).get('/medic');

    expect(medic.body).toHaveProperty('medics');
  });
});
