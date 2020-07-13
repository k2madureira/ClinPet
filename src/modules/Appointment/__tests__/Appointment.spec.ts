/* import FakeMedic from '@modules/Medic/fakes/FakeMedic';
import FakeSpecialty from '@modules/Specialty/fakes/FakeSpecialty';
import FakeAppointmentController from '../fakes/FakeAppointment';

let fakeAppointmentController: FakeAppointmentController;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentController = new FakeAppointmentController();
  });

  it('Should be able create a new appointment', async () => {
    const appointment = await fakeAppointmentController.create({
      name: 'Dragon',
      species: 'Dog',
      breed: 'pitbull',
      urgent: true,
      specialty_id: 'specialty_id',
      created_at: new Date(),
      updated_at: new Date(),
    });

    expect(appointment).toHaveProperty('id');
  });
});
*/
function sum(a: number, b: number): number {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
