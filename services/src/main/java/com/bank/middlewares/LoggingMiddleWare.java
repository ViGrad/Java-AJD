package com.bank.middlewares;

import com.google.appengine.api.datastore.Transaction;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class LoggingMiddleWare extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Queue queue = QueueFactory.getDefaultQueue();
        try {
            // Transaction txn = ds.beginTransaction();
            if(!request.getServletPath().equals("/logging")) {
                queue.add(TaskOptions.Builder.withUrl("/logging").method(TaskOptions.Method.POST)
                        .param("path", request.getServletPath())
                        .param("method", request.getMethod()));
            }
            // txn.commit();

        }
        catch (Exception ex) {
            throw ex;
        }

        filterChain.doFilter(request, response);
    }

}
