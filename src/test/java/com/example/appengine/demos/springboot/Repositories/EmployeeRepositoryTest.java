package com.example.appengine.demos.springboot.Repositories;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.tools.development.testing.LocalDatastoreServiceTestConfig;
import com.google.appengine.tools.development.testing.LocalServiceTestHelper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static com.google.appengine.api.datastore.FetchOptions.Builder.withLimit;
import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeRepositoryTest {

        private final LocalServiceTestHelper helper =
                new LocalServiceTestHelper(new LocalDatastoreServiceTestConfig());
        private DatastoreService ds;
        private EmployeeRepository employeeRepository;

        @Before
        public void setUp() {
            helper.setUp();
            ds = DatastoreServiceFactory.getDatastoreService();
            employeeRepository = new EmployeeRepository();
        }

        @After
        public void tearDown() {
            helper.tearDown();
        }

        private void doTest() {
            assertEquals(0, ds.prepare(new Query("Employee")).countEntities(withLimit(10)));

            employeeRepository.Create("GROU", "Guillaume", "Rousseau", true);

            assertEquals(1, ds.prepare(new Query("Employee")).countEntities(withLimit(10)));
        }

        @Test
        public void testInsert1() {
            doTest();
        }

        @Test
        public void testInsert2() {
            doTest();
        }
}
