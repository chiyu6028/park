<template>
  <div>
    <el-upload
      :action="actionUrl"
      list-type="picture-card"
      :auto-upload="true"
      multiple
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
              @input="limitLength(file)"
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
import T from '@utils/tools'

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
  computed: {
    ids () {
      return this.fileIds.join(',')
    }
  },
  methods: {
    initFileList () {
      let fileIds = []; let fileList = []; let describle = {}
      _.each(this.value || [], v => {
        fileIds.push(v.attid)
        fileList.push({
          id: v.attid,
          uid: v.attid,
          name: v.attrealname,
          url: `/downloadFile?filePath=${window.encodeURIComponent(v.attpath)}`
        })
        describle[v.attid] = v.attdis
        describle[v.attid + 'disabled'] = true
        describle[v.attid + 'placeholder'] = '请输入'
      })
      this.fileIds = fileIds
      this.fileList = fileList
      this.describle = describle
    },
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
      this.$emit('setFileList', this.ids)
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
          this.$emit('setFileList', this.ids)
          this.describle[file.uid + 'disabled'] = true
          this.describle[file.uid + 'placeholder'] = '请输入'
        }
      }
    },
    limitLength (file) {
      const limit = 1000
      let string = this.describle[file.uid]
      let len = T.getStringLen(string)
      // 验证长度
      if (len > limit) {
        while (len > limit) {
          string = string.slice(0, -1)
          len = T.getStringLen(string)
        }
        this.describle[file.uid] = string
        this.$message.warning(`描述长度不能超过${limit}`)
      }
    },
    changeDesc (file) {
      if (file.response && file.response.data && file.response.data.fileid) {
        this.$axios.post(URL['UPDATE_FILEDES'], {
          fileid: file.response.data.fileid,
          filedes: this.describle[file.uid]
        }, { $cancelToken: true })
      } else if (file.id) {
        this.$axios.post(URL['UPDATE_FILEDES'], {
          fileid: file.id,
          filedes: this.describle[file.uid]
        }, { $cancelToken: true })
      }
    }
  },
  watch: {
    value () {
      this.initFileList()
    }
  }
}
</script>
