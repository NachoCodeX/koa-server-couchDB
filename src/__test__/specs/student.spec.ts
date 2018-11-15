import * as request from 'supertest';
import app from '../../server'
import { IUserModel } from '../../models/user/user.interface';
import { IStudentModel } from '../../models/student/student.interface';

describe(' /auth/* [TEST]', () => {




    it.skip('should delete a student DELETE /api/student/_id ', async (done: Function) => {
        const _id: string = '5be715b068aacd0f5087bf44'

        const response = await request(app.getApp().callback())
            .delete(`/api/student/${_id}`)

        expect(response.status).toBe(200)
        done()
    })


})