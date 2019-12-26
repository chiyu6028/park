<template>
  <div>
    <el-upload
      :action="actionUrl"
      list-type="picture-card"
      :auto-upload="true"
      :on-success="uploadSuccess"
      :before-remove="beforeRemove"
      :file-list="fileList">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
            <el-input
              v-model="describle[file.uid]"
              :disabled="!describle[file.uid + 'disabled']"
              :placeholder="describle[file.uid + 'placeholder'] || '等待上传成功'"
              @change="changeDesc(file)"></el-input>
          </span>
        </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import * as _ from 'lodash'
import URL from '@config/urlConfig.js'

export default {
  name: 'upload',
  props: {
    value: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      actionUrl: URL['UPLOAD'],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      describle: {},
      fileList: [],
      fileIds: []
    }
  },
  mounted () {
    this.fileList = this.value || []
  },
  methods: {
    beforeRemove () {
      // 去掉默认的按键删除事件
      if (event && event.type === 'keydown' && (event.keyCode === 46 || event.keyCode === 8)) {
        return false
      }
    },
    handleRemove (file, fileList) {
      let list = _.filter(fileList, v => v.uid !== file.uid)
      this.fileList = list
      let ids = _.filter(fileList, v => v.id !== file.id)
      this.fileIds = ids
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadSuccess (response, file, fileList) {
      if (response.code === 1) {
        let data = response.data || {}
        if (data.fileid) { // filepath
          file.id = data.fileid
          this.fileList.push(file)
          this.fileIds.push(data.fileid)
          this.$emit('setFileList', this.fileIds.join(','))
          this.describle[file.uid + 'disabled'] = true
          this.describle[file.uid + 'placeholder'] = '请输入'
        }
      }
    },
    changeDesc (file) {
      if (file.response && file.response.data && file.response.data.fileid) {
        this.$axios.post(URL['UPDATE_FILEDES'], {
          fileid: file.response.data.fileid,
          filedes: this.describle[file.uid]
        }, { $cancelToken: true })
      }
    }
  }
}
</script>
