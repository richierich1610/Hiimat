/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e8c3cd98763035aac7a90c1
*
* You will get 10% discount for each one of your friends
* 
*/
package com.hiimat.utils;

import java.io.IOException;
import java.util.List;

import org.bson.types.ObjectId;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class ObjectIdListSerializer extends JsonSerializer<List<ObjectId>> {

	@Override
	public void serialize(List<ObjectId> value, JsonGenerator jgen, SerializerProvider provider)
	        throws IOException, JsonProcessingException {
	
	    if (value.isEmpty()) {
	        jgen.writeStartArray();
	        jgen.writeEndArray();
	        return;
	    }
	
	    jgen.writeStartArray();
	    for (ObjectId fooValue2 : value) {
	        jgen.writeString(fooValue2.toString());
	    }
	    jgen.writeEndArray();
	}
}
