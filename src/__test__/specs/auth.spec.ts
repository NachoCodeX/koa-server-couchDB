import * as request from 'supertest';
import app from '../../server'
import { IUserModel } from '../../models/user/user.interface';
import { IStudentModel } from '../../models/student/student.interface';

describe(' /auth/* [TEST]', () => {

    it.skip('should POST /auth/signin response 200', async (done: Function) => {
        const response = await request(app.getApp().callback()).post('/auth/signin')
        expect(response.status).toBe(200)
        done()
    })


    it.skip('should create a student POST /auth/signup ', async (done: Function) => {
        const user: IStudentModel = {
            firstName: 'Nacho',
            lastName: 'Castillo',
            email: 'test@gmail.com',
            password: '12345678',
            gender: 'M',
            isStudent: false,
            career: 1,
            semester: 1,
            specialty: 1,
        }

        const response = await request(app.getApp().callback())
            .post('/auth/signup').send(user)



        expect(response.status).toBe(200)
        done()
    })


})