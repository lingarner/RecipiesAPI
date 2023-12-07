const request = require('supertest');
const express =  require('express');
const routes = require('../routes/index');

const app = new express();
app.use('/', routes);

describe('Home routes', function () {

    test('responds to /',  async () => {
        const res = await request(app).get('/dessert');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain('[]');

    });
});